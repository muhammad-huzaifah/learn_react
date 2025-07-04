import {useState} from "react";

import {CORE_CONCEPTS} from './data.js';
import {Header} from "./components/Header/Header.jsx";
import {CoreConcepts} from "./components/CoreConcept.jsx";
import {TabButton} from "./components/TabButton.jsx";
import {EXAMPLES} from "./data.js";

function App() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
        // selectedButton => 'components', 'JSX', 'props', 'state'
        setSelectedTopic(selectedButton);
        // console.log(selectedTopic);
    }

    console.log('APP COMPONENT EXECUTED');

    let tabContent = <p>Please select a topic.</p>

    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }

    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcepts {...CORE_CONCEPTS[0]}/>
                        <CoreConcepts {...CORE_CONCEPTS[1]}/>
                        <CoreConcepts {...CORE_CONCEPTS[2]}/>
                        <CoreConcepts {...CORE_CONCEPTS[3]}/>
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton onSelect={() => handleSelect ('components')}>Components</TabButton>
                        <TabButton onSelect={() => handleSelect ('jsx')}>JSX</TabButton>
                        <TabButton onSelect={() => handleSelect ('props')}>Props</TabButton>
                        <TabButton onSelect={() => handleSelect ('state')}>State</TabButton>
                    </menu>
                    {tabContent}
                </section>
            </main>
        </div>
    );
}

export default App;
