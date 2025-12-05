import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useMenu } from '@/contexts/MenuContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, LogOut, Menu, Users, Settings, ShieldCheck, ShieldX, Home, Percent, RotateCcw, Download, Edit, QrCode, Sparkles, RefreshCw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { PrintPreview } from '@/components/PrintPreview';
import QRCodeLib from 'qrcode';
import { clearAndReseedDatabase } from '@/utils/resetDatabase';

const AdminDashboard = () => {
  const { user, isAdmin, isLoading, signOut } = useAuth();
  const { menuData, setIsEditMode, isEditMode, adjustPrices, resetToOriginal } = useMenu();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [pricePercent, setPricePercent] = useState("");
  const [priceScope, setPriceScope] = useState("all");
  const [isPriceDialogOpen, setIsPriceDialogOpen] = useState(false);
  const [isPrintPreviewOpen, setIsPrintPreviewOpen] = useState(false);
  const [isQRDialogOpen, setIsQRDialogOpen] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [isGeneratingQR, setIsGeneratingQR] = useState(false);

  useEffect(() => {
    if (!isLoading && !user) {
      navigate('/auth');
    }
  }, [user, isLoading, navigate]);

  const handleSignOut = async () => {
    await signOut();
    toast({
      title: 'Signed out',
      description: 'You have been signed out successfully.',
    });
    navigate('/');
  };

  const toggleEditMode = () => {
    if (!isAdmin) {
      toast({
        title: 'Access denied',
        description: 'You need admin privileges to edit the menu.',
        variant: 'destructive',
      });
      return;
    }
    setIsEditMode(!isEditMode);
    toast({
      title: isEditMode ? 'Edit mode disabled' : 'Edit mode enabled',
      description: isEditMode
        ? 'You can no longer make changes to the menu.'
        : 'You can now edit menu items.',
    });
  };

  const handlePriceAdjust = () => {
    const percent = parseFloat(pricePercent);
    if (isNaN(percent)) {
      toast({
        title: 'Invalid input',
        description: 'Please enter a valid percentage',
        variant: 'destructive',
      });
      return;
    }

    if (priceScope === "all") {
      adjustPrices(percent);
    } else {
      adjustPrices(percent, priceScope);
    }

    toast({
      title: 'Prices updated',
      description: `Prices ${percent >= 0 ? "increased" : "decreased"} by ${Math.abs(percent)}%`,
    });
    setIsPriceDialogOpen(false);
    setPricePercent("");
  };

  const handleReset = () => {
    resetToOriginal();
    toast({
      title: 'Menu reset',
      description: 'Menu has been reset to original values.',
    });
  };

  const generateStylishQRCode = async () => {
    setIsGeneratingQR(true);
    try {
      const menuUrl = window.location.origin;

      // Generate high-quality QR code with custom styling
      const qrDataUrl = await QRCodeLib.toDataURL(menuUrl, {
        width: 600,
        margin: 3,
        color: {
          dark: '#8B5CF6',  // Purple to match theme
          light: '#FFFFFF',
        },
        errorCorrectionLevel: 'H',
      });

      setQrCodeUrl(qrDataUrl);
      setIsQRDialogOpen(true);

      toast({
        title: '✨ QR Code Generated',
        description: 'Your stylish menu QR code is ready to share!',
      });
    } catch (error) {
      console.error('Error generating QR code:', error);
      toast({
        title: 'Error',
        description: 'Failed to generate QR code. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsGeneratingQR(false);
    }
  };

  const downloadQRCode = () => {
    const link = document.createElement('a');
    link.href = qrCodeUrl;
    link.download = `menu-qr-${new Date().toISOString().split('T')[0]}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: '📥 Downloaded',
      description: 'QR code saved to your downloads folder.',
    });
  };

  const handleReseedDatabase = async () => {
    if (!confirm('This will clear all menu data and reload with updated prices. Continue?')) {
      return;
    }

    try {
      await clearAndReseedDatabase();
      toast({
        title: '🔄 Database Cleared',
        description: 'Reloading menu with updated prices...',
      });

      // Wait a moment then reload the page
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      console.error('Error reseeding database:', error);
      toast({
        title: 'Error',
        description: 'Failed to reseed database. Please try again.',
        variant: 'destructive',
      });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Loader2 className="h-8 w-8 animate-spin text-purple-400" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  // Count menu items
  const totalSections = Object.keys(menuData).length;
  const totalCategories = Object.values(menuData).reduce(
    (acc, section) => acc + (section?.categories?.length || 0),
    0
  );
  const totalItems = Object.values(menuData).reduce(
    (acc, section) => acc + (section?.categories?.reduce(
      (catAcc, cat) => catAcc + (cat?.items?.length || 0),
      0
    ) || 0),
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
            <p className="text-slate-300 mt-1">Manage your menu and settings</p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              onClick={() => navigate('/')}
              className="border-slate-600 text-slate-300 hover:bg-slate-700"
            >
              <Home className="h-4 w-4 mr-2" />
              View Menu
            </Button>
            <Button
              variant="destructive"
              onClick={handleSignOut}
              className="bg-red-600 hover:bg-red-700"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>

        {/* User Info Card */}
        <Card className="bg-slate-800/80 border-purple-500/30 mb-6">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-white flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Account
                </CardTitle>
                <CardDescription className="text-slate-300 mt-1">
                  {user.email}
                </CardDescription>
              </div>
              <Badge
                variant={isAdmin ? "default" : "secondary"}
                className={isAdmin ? "bg-green-600" : "bg-slate-600"}
              >
                {isAdmin ? (
                  <>
                    <ShieldCheck className="h-3 w-3 mr-1" />
                    Admin
                  </>
                ) : (
                  <>
                    <ShieldX className="h-3 w-3 mr-1" />
                    User
                  </>
                )}
              </Badge>
            </div>
          </CardHeader>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="bg-slate-800/80 border-purple-500/30">
            <CardHeader className="pb-2">
              <CardDescription className="text-slate-400">Menu Sections</CardDescription>
              <CardTitle className="text-3xl text-white">{totalSections}</CardTitle>
            </CardHeader>
          </Card>
          <Card className="bg-slate-800/80 border-purple-500/30">
            <CardHeader className="pb-2">
              <CardDescription className="text-slate-400">Categories</CardDescription>
              <CardTitle className="text-3xl text-white">{totalCategories}</CardTitle>
            </CardHeader>
          </Card>
          <Card className="bg-slate-800/80 border-purple-500/30">
            <CardHeader className="pb-2">
              <CardDescription className="text-slate-400">Menu Items</CardDescription>
              <CardTitle className="text-3xl text-white">{totalItems}</CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* Menu Tools */}
        <Card className="bg-slate-800/80 border-purple-500/30 mb-6">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Menu Tools
            </CardTitle>
            <CardDescription className="text-slate-300">
              Quick actions for menu management
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {/* Adjust Prices */}
              <Dialog open={isPriceDialogOpen} onOpenChange={setIsPriceDialogOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    disabled={!isAdmin}
                    className="border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10"
                  >
                    <Percent className="w-4 h-4 mr-2" />
                    Adjust Prices
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-slate-800 border-slate-600">
                  <DialogHeader>
                    <DialogTitle className="text-white">Adjust Prices</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4">
                    <div>
                      <Label className="text-slate-300">Percentage Change</Label>
                      <Input
                        type="number"
                        placeholder="e.g., 10 for +10%, -5 for -5%"
                        value={pricePercent}
                        onChange={(e) => setPricePercent(e.target.value)}
                        className="mt-1 bg-slate-700 border-slate-600 text-white"
                      />
                    </div>
                    <div>
                      <Label className="text-slate-300">Apply To</Label>
                      <Select value={priceScope} onValueChange={setPriceScope}>
                        <SelectTrigger className="mt-1 bg-slate-700 border-slate-600 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-700 border-slate-600">
                          <SelectItem value="all">All Sections</SelectItem>
                          <SelectItem value="snacksAndStarters">Snacks & Starters</SelectItem>
                          <SelectItem value="foodMenu">Food Menu</SelectItem>
                          <SelectItem value="beveragesMenu">Beverages & Spirits</SelectItem>
                          <SelectItem value="sideItems">Side Items</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button onClick={handlePriceAdjust} className="bg-yellow-600 hover:bg-yellow-700">
                      Apply Price Change
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>

              {/* Edit Menu */}
              <Button
                onClick={toggleEditMode}
                disabled={!isAdmin}
                variant="outline"
                className={isEditMode
                  ? "border-purple-500 bg-purple-500/20 text-purple-300"
                  : "border-purple-500/50 text-purple-400 hover:bg-purple-500/10"}
              >
                <Edit className="w-4 h-4 mr-2" />
                {isEditMode ? 'Exit Edit' : 'Edit Menu'}
              </Button>

              {/* Reset */}
              <Button
                variant="outline"
                onClick={handleReset}
                disabled={!isAdmin}
                className="border-red-500/50 text-red-400 hover:bg-red-500/10"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset
              </Button>

              {/* Download/Print */}
              <Button
                variant="outline"
                onClick={() => setIsPrintPreviewOpen(true)}
                className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
              >
                <Download className="w-4 h-4 mr-2" />
                Download / Print
              </Button>

              {/* Generate Stylish QR Code */}
              <Button
                variant="outline"
                onClick={generateStylishQRCode}
                disabled={isGeneratingQR}
                className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300 relative overflow-hidden group"
              >
                {isGeneratingQR ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <QrCode className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    <Sparkles className="w-3 h-3 absolute top-1 right-1 text-purple-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Generate QR Code
                  </>
                )}
              </Button>

              {/* Reload Updated Prices */}
              <Button
                variant="outline"
                onClick={handleReseedDatabase}
                disabled={!isAdmin}
                className="border-orange-500/50 text-orange-400 hover:bg-orange-500/10 transition-all duration-300"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Reload Updated Prices
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <Card className="bg-slate-800/80 border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Menu className="h-5 w-5" />
              Quick Navigation
            </CardTitle>
            <CardDescription className="text-slate-300">
              {isAdmin
                ? 'You have admin privileges. You can edit the menu.'
                : 'You do not have admin privileges. Contact an administrator to get access.'}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="outline"
                onClick={() => navigate('/')}
                className="border-slate-600 text-slate-300 hover:bg-slate-700"
              >
                Go to Menu {isEditMode && '(Edit Mode Active)'}
              </Button>
            </div>

            {!isAdmin && (
              <div className="p-4 bg-yellow-900/30 border border-yellow-600/30 rounded-lg">
                <p className="text-yellow-200 text-sm">
                  <strong>Note:</strong> To get admin access, an existing admin needs to add your user ID to the user_roles table with the 'admin' role.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <PrintPreview isOpen={isPrintPreviewOpen} onClose={() => setIsPrintPreviewOpen(false)} />

      {/* Stylish QR Code Dialog */}
      <Dialog open={isQRDialogOpen} onOpenChange={setIsQRDialogOpen}>
        <DialogContent className="bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900 border-purple-500/30 max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl text-white flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-purple-400 animate-pulse" />
              Menu QR Code
            </DialogTitle>
          </DialogHeader>

          <div className="flex flex-col items-center gap-6 py-4">
            {qrCodeUrl && (
              <>
                {/* QR Code with stylish frame */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                  <div className="relative bg-white p-6 rounded-xl shadow-2xl">
                    <img
                      src={qrCodeUrl}
                      alt="Menu QR Code"
                      className="w-64 h-64 rounded-lg"
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="text-center space-y-2">
                  <p className="text-purple-200 text-sm font-medium flex items-center gap-2 justify-center">
                    <QrCode className="w-4 h-4" />
                    Scan to view menu
                  </p>
                  <p className="text-slate-400 text-xs max-w-xs">
                    Share this QR code with your customers for instant menu access
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 w-full">
                  <Button
                    onClick={downloadQRCode}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                  <Button
                    onClick={() => setIsQRDialogOpen(false)}
                    variant="outline"
                    className="border-slate-600 text-slate-300 hover:bg-slate-700"
                  >
                    Close
                  </Button>
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminDashboard;
