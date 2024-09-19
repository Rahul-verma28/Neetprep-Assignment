import { Star } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  images?: string[];
  isNew?: boolean;
}

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div
      onClick={() => onClick(product)}
      className="bg-white dark:bg-gray-900 overflow-hidden shadow-lg cursor-pointer dark:shadow-gray-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500 rounded-2xl hover:shadow-xl"
    >
      <div className="relative">
        {product.images && product.images.length > 0 ? (
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
        ) : (
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
            <span>No Image Available</span>
          </div>
        )}

        {product.isNew && (
          <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
            New
          </span>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
        <div className="flex items-center justify-between">
          <p className="text-gray-600 dark:text-gray-300">
            ${product.price.toFixed(2)}
          </p>

          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400" />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {product.rating}
            </span>
          </div>
        </div>

        <div className="mt-4 flex justify-end">
          <button
            className="text-blue-500 text-sm font-medium hover:underline"
            onClick={() => onClick(product)}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
