import { Category } from '../../categories/category.entity'

export interface ISaveExtension {
  name: string
  description?: string | null
  version: string
  price?: number
  categories?: Category[]
}
