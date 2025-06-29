import "../index.css"

export default function Card({ title, images=[], footerText=""}) {
    return (
        <div className="rounded-xl bg-amber-200 w-1/3 h-3">
            <h2>{title}</h2>
            {images.map(image => {
                return (
                    <img src={image} alt={title + " cover image"} className={"object-cover object-top " + (images.length === 2 ? "w-1/2":"w-1")} />
                )
            })}
            <div className="bg-opacity-50 bg-black">
                {footerText}
            </div>
        </div>
    )
}