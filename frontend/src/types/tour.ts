export interface Tour {
  id: number
  slug: string
  title: string
  base_price: number
  hero_image_url: string | null
  gallery_images: string[]
  destination_slug: string
  destination_name: string
  category_slug: string
  category_name: string
  short_description: string
  is_featured: boolean
}

