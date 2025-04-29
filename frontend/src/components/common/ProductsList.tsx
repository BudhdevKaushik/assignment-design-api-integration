import React, { useState, useEffect } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  date: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductListProps {
  data: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ data }) => {
  const [items, setItems] = useState<Product[]>(data);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortConfig, setSortConfig] = useState<{
    key: string | null;
    direction: "asc" | "desc";
  }>({
    key: null,
    direction: "asc",
  });

  useEffect(() => {
    if (searchTerm === "") {
      setItems(data);
    } else {
      const filteredItems = data.filter((item) =>
        Object.values(item).some((val) => {
          if (typeof val === "object") {
            return Object.values(val).some((subVal) =>
              String(subVal).toLowerCase().includes(searchTerm.toLowerCase())
            );
          }
          return String(val).toLowerCase().includes(searchTerm.toLowerCase());
        })
      );
      setItems(filteredItems);
    }
  }, [searchTerm, data]);

  const requestSort = (key: keyof Product | string) => {
    let direction: "asc" | "desc" = "asc";

    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    setSortConfig({ key: key as string, direction });

    const sortedItems = [...items].sort((a, b) => {
      const getNestedValue = (obj: Product, path: string): any => {
        return path.split(".").reduce((acc, part) => {
          if (acc && typeof acc === "object" && part in acc) {
            return (acc as any)[part];
          }
          return undefined;
        }, obj as any);
      };

      let aValue, bValue;

      if (key.includes(".")) {
        aValue = getNestedValue(a, key);
        bValue = getNestedValue(b, key);
      } else {
        aValue = a[key as keyof Product];
        bValue = b[key as keyof Product];
      }

      if (aValue === undefined || bValue === undefined) return 0;

      if (aValue < bValue) {
        return direction === "asc" ? -1 : 1;
      }
      if (aValue > bValue) {
        return direction === "asc" ? 1 : -1;
      }
      return 0;
    });

    setItems(sortedItems);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-10xl">
      <div className="mb-6 flex items-center justify-start">
        <input
          type="text"
          placeholder="Search by any keyword..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          style={{ width: "300px" }}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                onClick={() => requestSort("title")}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
              >
                <div className="flex items-center">
                  Title
                  {sortConfig.key === "title" && (
                    <span className="ml-1">
                      {sortConfig.direction === "asc" ? "↑" : "↓"}
                    </span>
                  )}
                </div>
              </th>
              <th
                onClick={() => requestSort("price")}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
              >
                <div className="flex items-center">
                  Price
                  {sortConfig.key === "price" && (
                    <span className="ml-1">
                      {sortConfig.direction === "asc" ? "↑" : "↓"}
                    </span>
                  )}
                </div>
              </th>
              <th
                onClick={() => requestSort("category")}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
              >
                <div className="flex items-center">
                  Category
                  {sortConfig.key === "category" && (
                    <span className="ml-1">
                      {sortConfig.direction === "asc" ? "↑" : "↓"}
                    </span>
                  )}
                </div>
              </th>
              <th
                onClick={() => requestSort("date")}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
              >
                <div className="flex items-center">
                  Date
                  {sortConfig.key === "date" && (
                    <span className="ml-1">
                      {sortConfig.direction === "asc" ? "↑" : "↓"}
                    </span>
                  )}
                </div>
              </th>
              <th
                onClick={() => requestSort("rating.rate")}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
              >
                <div className="flex items-center">
                  Rating
                  {sortConfig.key === "rating.rate" && (
                    <span className="ml-1">
                      {sortConfig.direction === "asc" ? "↑" : "↓"}
                    </span>
                  )}
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {items.length > 0 ? (
              items.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="flex-shrink-0 h-10 w-10 object-contain mr-3"
                      />
                      <span className="text-sm font-medium text-gray-900">
                        {item.title}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ${item.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(item.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.rating.rate} ({item.rating.count})
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={7}
                  className="px-6 py-4 text-center text-sm text-gray-500"
                >
                  No Products Found!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
