import { supabase } from "@/integrations/supabase/client";

export const clearAndReseedDatabase = async () => {
    console.log("Clearing database...");

    // Delete all menu items first (foreign key constraint)
    const { error: itemsError } = await supabase
        .from("menu_items")
        .delete()
        .neq("id", "00000000-0000-0000-0000-000000000000"); // Delete all

    if (itemsError) {
        console.error("Error deleting items:", itemsError);
    }

    // Delete all categories
    const { error: categoriesError } = await supabase
        .from("menu_categories")
        .delete()
        .neq("id", "00000000-0000-0000-0000-000000000000"); // Delete all

    if (categoriesError) {
        console.error("Error deleting categories:", categoriesError);
    }

    // Delete all sections
    const { error: sectionsError } = await supabase
        .from("menu_sections")
        .delete()
        .neq("id", "00000000-0000-0000-0000-000000000000"); // Delete all

    if (sectionsError) {
        console.error("Error deleting sections:", sectionsError);
    }

    console.log("Database cleared! Refresh the page to reseed with updated data.");

    return true;
};
