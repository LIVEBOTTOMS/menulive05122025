import { useState } from "react";
import { MenuItem as MenuItemType } from "@/data/menuData";
import { cn } from "@/lib/utils";
import { useMenu } from "@/contexts/MenuContext";
import { Input } from "@/components/ui/input";
import { Check, X, Trash2 } from "lucide-react";

interface EditableMenuItemProps {
  item: MenuItemType;
  index: number;
  accentColor: "cyan" | "magenta";
  sectionKey: string;
  categoryIndex: number;
  itemIndex: number;
}

export const EditableMenuItem = ({
  item,
  index,
  accentColor,
  sectionKey,
  categoryIndex,
  itemIndex
}: EditableMenuItemProps) => {
  const { isEditMode, updateMenuItem, deleteMenuItem } = useMenu();
  const [isEditing, setIsEditing] = useState(false);
  const [editedItem, setEditedItem] = useState(item);

  const hasMultiplePrices = item.halfPrice && item.fullPrice;
  const hasSizes = item.sizes && item.sizes.length > 0;

  const handleSave = () => {
    updateMenuItem(sectionKey, categoryIndex, itemIndex, editedItem);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedItem(item);
    setIsEditing(false);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (confirm(`Are you sure you want to delete "${item.name}"? This action cannot be undone.`)) {
      deleteMenuItem(sectionKey, categoryIndex, itemIndex);
    }
  };

  if (isEditMode && isEditing) {
    return (
      <div className="py-3 px-4 rounded-lg bg-card/60 border border-primary/30 backdrop-blur-sm">
        <div className="flex flex-col gap-3">
          <Input
            value={editedItem.name}
            onChange={(e) => setEditedItem({ ...editedItem, name: e.target.value })}
            placeholder="Item name"
            className="h-9 text-sm font-medium bg-background/50"
          />
          <Input
            value={editedItem.description || ""}
            onChange={(e) => setEditedItem({ ...editedItem, description: e.target.value })}
            placeholder="Description (e.g., Artisan preparation with house-made spices)"
            className="h-9 text-sm bg-background/50"
          />
          <div className="flex gap-2 items-center">
            {hasSizes ? (
              editedItem.sizes?.map((size, i) => (
                <Input
                  key={i}
                  value={size}
                  onChange={(e) => {
                    const newSizes = [...(editedItem.sizes || [])];
                    newSizes[i] = e.target.value;
                    setEditedItem({ ...editedItem, sizes: newSizes });
                  }}
                  className="h-9 w-20 text-sm bg-background/50"
                />
              ))
            ) : hasMultiplePrices ? (
              <>
                <Input
                  value={editedItem.halfPrice || ""}
                  onChange={(e) => setEditedItem({ ...editedItem, halfPrice: e.target.value })}
                  placeholder="Half"
                  className="h-9 w-24 text-sm bg-background/50"
                />
                <Input
                  value={editedItem.fullPrice || ""}
                  onChange={(e) => setEditedItem({ ...editedItem, fullPrice: e.target.value })}
                  placeholder="Full"
                  className="h-9 w-24 text-sm bg-background/50"
                />
              </>
            ) : (
              <Input
                value={editedItem.price || ""}
                onChange={(e) => setEditedItem({ ...editedItem, price: e.target.value })}
                placeholder="Price"
                className="h-9 w-24 text-sm bg-background/50"
              />
            )}
            <button onClick={handleSave} className="p-2 hover:bg-primary/20 rounded-lg transition-colors">
              <Check className="w-4 h-4 text-primary" />
            </button>
            <button onClick={handleCancel} className="p-2 hover:bg-destructive/20 rounded-lg transition-colors">
              <X className="w-4 h-4 text-destructive" />
            </button>
          </div>
          <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
            <input
              type="checkbox"
              checked={editedItem.available !== false}
              onChange={(e) => setEditedItem({ ...editedItem, available: e.target.checked })}
              className="w-4 h-4 rounded border-primary/30 cursor-pointer"
            />
            <span>Available</span>
          </label>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "group relative py-3 px-3 rounded-lg transition-all duration-300",
        "hover:bg-card/40 hover:shadow-lg hover:shadow-primary/5",
        index % 2 === 0 ? "bg-transparent" : "bg-card/20",
        isEditMode && "cursor-pointer hover:ring-1 hover:ring-primary/40",
        item.available === false && "opacity-60"
      )}
      onClick={() => isEditMode && setIsEditing(true)}
    >
      {/* Delete button in edit mode */}
      {isEditMode && (
        <button
          onClick={handleDelete}
          className="absolute right-2 top-2 p-1.5 rounded-lg bg-destructive/10 hover:bg-destructive/30 opacity-0 group-hover:opacity-100 transition-all z-10"
        >
          <Trash2 className="w-3.5 h-3.5 text-destructive" />
        </button>
      )}

      {/* Row layout - name/description on left, prices on right */}
      <div className="flex items-start justify-between gap-2">
        {/* Item name and description */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start gap-2">
            <span className={cn(
              "w-1 h-1 rounded-full transition-all duration-300 group-hover:scale-150 group-hover:shadow-lg mt-2 flex-shrink-0",
              accentColor === "cyan"
                ? "bg-primary group-hover:shadow-primary/50"
                : "bg-secondary group-hover:shadow-secondary/50",
              item.available === false && "bg-muted-foreground/30"
            )} />
            <div className="flex items-center gap-2 flex-wrap">
              <span className={cn(
                "font-cinzel text-sm tracking-wide font-medium group-hover:text-foreground/90",
                item.available === false ? "text-muted-foreground line-through" : "text-foreground"
              )}>
                {item.name}
              </span>
              {item.available === false && (
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-destructive/20 text-destructive border border-destructive/30">
                  N/A
                </span>
              )}
            </div>
          </div>
          {item.description && (
            <p className={cn(
              "text-xs ml-3 mt-1 italic leading-relaxed font-light",
              item.available === false ? "text-muted-foreground/50" : "text-muted-foreground"
            )}>
              {item.description}
            </p>
          )}
        </div>

        {/* Price(s) */}
        <div className="flex-shrink-0 text-right">
          {hasSizes ? (
            <div className={cn(
              "flex flex-wrap gap-x-3 gap-y-1 justify-end text-sm font-rajdhani font-semibold",
              item.available === false ? "text-muted-foreground/50 line-through" : "text-accent"
            )}>
              {item.sizes!.map((size, i) => (
                <span key={i} className="tracking-wide whitespace-nowrap">{size}</span>
              ))}
            </div>
          ) : hasMultiplePrices ? (
            <div className={cn(
              "text-sm font-rajdhani flex flex-wrap gap-x-2 justify-end",
              item.available === false && "line-through"
            )}>
              <span className="whitespace-nowrap">
                <span className="text-muted-foreground/70 text-xs uppercase tracking-wider">H </span>
                <span className={cn(
                  "font-semibold tracking-wide",
                  item.available === false ? "text-muted-foreground/50" : "text-accent"
                )}>{item.halfPrice}</span>
              </span>
              <span className="whitespace-nowrap">
                <span className="text-muted-foreground/70 text-xs uppercase tracking-wider">F </span>
                <span className={cn(
                  "font-semibold tracking-wide",
                  item.available === false ? "text-muted-foreground/50" : "text-accent"
                )}>{item.fullPrice}</span>
              </span>
            </div>
          ) : (
            <span className={cn(
              "font-rajdhani text-base font-bold tracking-wide whitespace-nowrap",
              item.available === false ? "text-muted-foreground/50 line-through" : "text-accent"
            )}>
              {item.price}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};