//  "use client"

// import { useState } from "react"
// import Image from "next/image"
// import { Card } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { X } from "lucide-react"

// export function GalleryGrid() {
//   const [selectedImage, setSelectedImage] = useState<string | null>(null)

//   const galleryItems = [
//     {
//       id: 1,
//       image: "https://images.unsplash.com/photo-1595950653045-2f9b0c26d6a0?auto=format&fit=crop&w=800&q=80",
//       title: "Handmade Palm Slippers",
//       available: true,
//       product: "Naija Craft Slide — Brown Leather",
//     },
//     {
//       id: 2,
//       image: "https://images.unsplash.com/photo-1618354691373-24c8b1d1e2cb?auto=format&fit=crop&w=800&q=80",
//       title: "Everyday Comfort",
//       available: true,
//       product: "Casual Street Slide — Black",
//     },
//     {
//       id: 3,
//       image: "https://images.unsplash.com/photo-1600180758895-b0a5f3a5e1f5?auto=format&fit=crop&w=800&q=80",
//       title: "Traditional Woven Style",
//       available: false,
//       product: "Heritage Palm — Woven Sandal",
//     },
//     {
//       id: 4,
//       image: "https://images.unsplash.com/photo-1595950653100-6b9e8e8c88cf?auto=format&fit=crop&w=800&q=80",
//       title: "Classic Handmade Leather",
//       available: true,
//       product: "Stride Leather Sandal — Tan",
//     },
//     {
//       id: 5,
//       image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
//       title: "Premium Street Slide",
//       available: true,
//       product: "Urban Slide — Dark Brown",
//     },
//     {
//       id: 6,
//       image: "https://images.unsplash.com/photo-1600180758848-fb0e6c84c65e?auto=format&fit=crop&w=800&q=80",
//       title: "Artisan Craft Finish",
//       available: true,
//       product: "Spoke Handmade Slide — Olive",
//     },
//   ]

//   return (
//     <>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {galleryItems.map((item) => (
//           <Card
//             key={item.id}
//             className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300"
//             onClick={() => setSelectedImage(item.image)}
//           >
//             <div className="relative aspect-square overflow-hidden">
//               <Image
//                 src={item.image}
//                 alt={`${item.product} - ${item.title}`}
//                 fill
//                 className="object-cover group-hover:scale-105 transition-transform duration-300"
//               />
//               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

//               {/* Overlay Content */}
//               <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <div className="flex justify-end">
//                   <Badge
//                     variant={item.available ? "default" : "secondary"}
//                     className={
//                       item.available
//                         ? "bg-green-100 text-green-800 border-green-200"
//                         : "bg-gray-100 text-gray-800 border-gray-200"
//                     }
//                   >
//                     {item.available ? "Available" : "Out of Stock"}
//                   </Badge>
//                 </div>

//                 <div className="text-white drop-shadow">
//                   <h3 className="font-heading font-bold text-lg mb-1">{item.title}</h3>
//                   <p className="text-sm opacity-90">{item.product}</p>
//                 </div>
//               </div>
//             </div>
//           </Card>
//         ))}
//       </div>

//       {/* Fullscreen Modal */}
//       {selectedImage && (
//         <div
//           className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
//           onClick={() => setSelectedImage(null)}
//         >
//           <div className="relative max-w-4xl max-h-full">
//             <button
//               onClick={() => setSelectedImage(null)}
//               className="absolute -top-12 right-0 text-white hover:text-accent transition-colors"
//             >
//               <X className="h-8 w-8" />
//             </button>
//             <Image
//               src={selectedImage}
//               alt="Handmade slippers from Stride & Spoke"
//               width={800}
//               height={800}
//               className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
//             />
//           </div>
//         </div>
//       )}
//     </>
//   )
// }
"use client"

import { ImageOff } from "lucide-react"
import { Card } from "@/components/ui/card"

export function GalleryGrid() {
  const galleryItems: any[] = [] // empty for now

  if (galleryItems.length === 0) {
    return (
      <section className="py-20 bg-background text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-10 flex flex-col items-center justify-center border-dashed border-2 border-muted-foreground/30">
            <ImageOff className="h-12 w-12 text-muted-foreground mb-4" />
            <h2 className="font-heading font-bold text-2xl text-foreground mb-2">
              No Gallery Available
            </h2>
            <p className="text-muted-foreground max-w-md">
              Our handmade slippers and footwear collection is coming soon.  
              Stay tuned to discover unique, street-inspired designs from Gombe, Nigeria.
            </p>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* later, map galleryItems here when you add products */}
    </div>
  )
}
