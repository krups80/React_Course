export default function Entry(props){
    console.log(props)
    return (
        <>
        <article className="entry-container">
            <div className="img-container">
                <img className="img-class" src={props.entry.img.src} alt={props.entry.img.alt} />
            </div>
            <div className="info-container">
                <img className="marker-class" src="/marker.png" alt="marker-logo" />
                <span className="country-span">{props.entry.country}</span>
                <a className="anchor-tag" href={props.entry.googleMapsLink}>View on Google Maps</a>
                <p className="title-tag">{props.entry.title}</p>
                <p className="dates-tag">{props.entry.dates}</p>
                <p className="text-tag">{props.entry.text}</p>
            </div>
        </article>
        {/* <hr /> */}
        </>
    )
}