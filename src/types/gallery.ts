export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: string;
  featured: boolean;
  width?: number;
  height?: number;
}
