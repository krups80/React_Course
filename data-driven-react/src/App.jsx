import data from "./components/data";
import Entry from "./components/Entry";
import Header from "./components/Header";

export default function App(){
  const entryElements = data.map((entry) => {
    return <Entry 
    key = {entry.id}
    entry = {entry}
    // img = {entry.img} 
    // title = {entry.title} 
    // country = {entry.country}
    // gLink = {entry.googleMapsLink} 
    // dates = {entry.dates}
    // text = {entry.text}
    />
  })
  return(
    <>
    <Header />
    <main>
      {entryElements}
    </main>
    </>
  )
}