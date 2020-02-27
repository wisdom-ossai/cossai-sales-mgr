import { IUser } from './user.interface';
import { ICategory } from './category.interface';
import { IMetadata } from './metadata.interface';
import { IDownload } from './download.interface';
import { ITag } from './tag.interface';
import { IImage } from './image.interface';
import { IAttribute } from './attribute.interface';
import { IVariation } from './variation.interface';

export interface IProduct {
  _id: string;
  name: string;
  price: number;
  short_description: string;
  description: string;
  discount: number;
  photos: string;
  createdAt: Date;
  UpdatedAt: Date;
  createdBy: IUser;
  slug: string;
  permalink: string;
  type: string; // Options: simple, grouped, external and variable.Default is simple.
  status: string; // Options: draft, pending, private and publish.Default is publish.
  featured: boolean; // Default is false.
  sku: string; // Unique identifier.
  regular_price: number;
  sale_price: number;
  date_on_sale_from: Date; // Start date of sale price, in the site's timezone.
  date_on_sale_to: Date; // End date of sale price, in the site's timezone.
  on_sale: boolean;
  purchasable: boolean;
  total_sales: number;
  virtual: boolean;
  downloadable: boolean;
  downloads: IDownload[];
  download_limit: number;
  download_expiry: number; // Number of days until access to downloadable files expires.Default is - 1.
  external_url: string; // Product external URL.Only for external products.
  tax_status: string;  // Tax status.Options: taxable, shipping and none.Default is taxable.
  tax_class: string;
  manage_stock: boolean;
  stock_quantity: number;
  stock_status: string; // Options: instock, outofstock, onbackorder.Default is instock.
  backorders: string;  // If managing stock, this controls if backorders are allowed.Options: no, notify and yes.Default is no.
  backorders_allowed: boolean;
  backordered: boolean;
  sold_individually: boolean;
  weight: number;
  shipping_required: boolean;
  shipping_taxable: boolean;
  shipping_class: string;
  shipping_class_id: string;
  reviews_allowed: boolean;
  average_rating: number;
  rating_count: number;
  purchase_note: string;
  categories: ICategory[];
  tags: ITag[];
  images: IImage[];
  attributes: IAttribute[];
  default_attributes: IAttribute[];
  variations: IVariation[];
  grouped_products: IProduct[];
  menu_order: number; // integer	Menu order, used to custom sort products.
  meta_data: IMetadata[];
}
