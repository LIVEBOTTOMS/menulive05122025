-- Add available column to menu_items table
-- This column tracks whether a menu item is currently available
-- Default value is true (available)

ALTER TABLE menu_items 
ADD COLUMN IF NOT EXISTS available BOOLEAN DEFAULT true;

-- Add comment for documentation
COMMENT ON COLUMN menu_items.available IS 'Indicates whether the menu item is currently available (true) or not available/out of stock (false)';
