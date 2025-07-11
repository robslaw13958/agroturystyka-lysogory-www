// src/app/api/images/route.js
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const galleryPath = path.join(process.cwd(), 'public');
    
    // Przeczytaj wszystkie foldery (kategorie)
    const categories = fs.readdirSync(galleryPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);
    
    console.log('Znalezione kategorie:', categories);
    
    // NOWE: Dla każdej kategorii znajdź wszystkie zdjęcia
    const allImages = [];
    
    categories.forEach(category => {
      const categoryPath = path.join(galleryPath, category);
      
      // Przeczytaj pliki z tego folderu
      const files = fs.readdirSync(categoryPath)
        .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file)); // tylko zdjęcia
      
      console.log(`Kategoria ${category}:`, files);
      
      // Dodaj do głównej tablicy
      files.forEach(file => {
        allImages.push({
          src: `/${category}/${file}`,
          category: category,
          filename: file
        });
      });
    });
    
    console.log('Wszystkie zdjęcia:', allImages);
    
    return Response.json({ 
      categories, 
      images: allImages 
    });
  } catch (error) {
    console.error('Błąd:', error);
    return Response.json({ error: 'Nie można odczytać folderów' }, { status: 500 });
  }
}