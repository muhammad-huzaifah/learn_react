import {useState} from "react";

import {TabButton} from "./TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";
import {EXAMPLES} from "../data.js";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
        // selectedButton => 'components', 'JSX', 'props', 'state'
        setSelectedTopic(selectedButton);
        // console.log(selectedTopic);
    }

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

    return <Section title="Examples" id="examples">
            <Tabs>
                {tabContent}
            </Tabs>
            <menu>

            </menu>
        </Section>

}