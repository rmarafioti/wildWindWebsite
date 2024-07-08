/**
 *
 * @TattooCard holds each individual tattoo to be mapped through for the thumbnail gallery and is imported into tattoo artist gallery components
 */
export default function TattooCard({ tattoo, onClick, photos }) {
  /*const imageUrl = new URL(tattoo.image, import.meta.url).href;*/
  const imageUrl = tattoo.image;

  return (
    <img
      className="indicator"
      src={imageUrl}
      alt="Tattoo"
      onClick={() => onClick(photos.indexOf(tattoo))}
    />
  );
}
