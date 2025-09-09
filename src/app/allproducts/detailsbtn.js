"use client";
export default function Detailsbtn({productId}) {
  return (
    <div>
      <button onClick={() => alert(`Product ID: ${productId}`)}>Details</button>
    </div>
  );
}