import CoreConcept from "./CoreConcept.jsx"
import { CORE_CONCEPTS } from "../data.js"

export default function Coreconcepts () {
    return (
        <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        {CORE_CONCEPTS.map((conceptItem) => (<CoreConcept key={conceptItem.title} {...conceptItem} /> ) )}
                        {/*<CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} images={CORE_CONCEPTS[0].images} />*/}
                        {/*<CoreConcept title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} images={CORE_CONCEPTS[1].images} />
                        <CoreConcept title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} images={CORE_CONCEPTS[2].images} />
                        <CoreConcept title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description} images={CORE_CONCEPTS[3].images} />*/}
                        {/*<CoreConcept {...CORE_CONCEPTS[0]} />
                        <CoreConcept {...CORE_CONCEPTS[1]} />
                        <CoreConcept {...CORE_CONCEPTS[2]} />
                        <CoreConcept {...CORE_CONCEPTS[3]} />*/}
                    </ul>
                </section>
    )
}