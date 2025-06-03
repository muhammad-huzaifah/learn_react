import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';

const reactDescription = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
    return Math.floor(Math.random() * (max+1));
}

function Header() {
    const description = reactDescription[genRandomInt(2)];

    return (
        <header>
            <img src={reactImg} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {/*{reactDescription[genRandomInt(2)]} React concepts you will need for almost any app you are going to build!*/}
                {description} React concepts you will need for almost any app you are going to build!
            </p>
        </header>
    );
}

function CoreConcepts(props) {
    return (
        <li>
            <img src={props.image} alt={props.title}/>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </li>
    )
}

function App() {
    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcepts
                            title = "Components"
                            description = "The core UI building blocks of React applications."
                            image = {componentsImg}
                        />
                        <CoreConcepts
                            title="Props"
                        />
                        <CoreConcepts />
                        <CoreConcepts />
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default App;
