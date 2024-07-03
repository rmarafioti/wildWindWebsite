/**
 *
 * @TattooCard holds each individual tattoo to be mapped through for the thumbnail gallery
 */
export default function TattooCard({ tattoo, onClick, photos }) {
  const imageUrl = new URL(tattoo.image, import.meta.url).href;
  return (
    <img
      className="indicator"
      src={imageUrl}
      alt="Tattoo"
      onClick={() => onClick(photos.indexOf(tattoo))}
    />
  );
}
