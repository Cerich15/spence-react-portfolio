import flippy from '../public/flippy.png'
import po_tracker from "../public/po_tracker.png"
import python_automation from "../public/python_automate.jpg"
import lexi from "../public/lexi.png";
import pokedex from "../public/pokemon.png"

const projectsName = ["flippy", "lexi", "pokedex", "po_tracker", "python_automation"]
const flippyStack = ['APPLICATION', 'REACT-JS', 'REST-API', 'REACT-REDUX', 'MATERIAL-UI']
const lexiStack = ['WEB APPLICATION', 'REACT-JS', 'REST-API', 'REACT-REDUX', 'MATERIAL-UI', 'STYLED-COMPONENTS']
const pokedexStack = ['WEB APPLICATION', 'REACT', 'TYPESCRIPT', 'REST-API', 'REACT-REDUX', 'MATERIAL-UI']
const poTrackerStack = ['WEB APPLICATION', 'REACT-JS', 'REST-API', 'REDUX-SAGA', 'MATERIAL-UI']
const pythonAutomateStack = ['DATA ANALYTICS', 'PYTHON', 'MYSQL', 'SHELL/BASH']

const projects = {
    flippy: {
        name: "Misorobotics Flippy",
        description: "A user interface that can control a robot/AutoBins, intelligent automation solutions that assist chefs to make food at restaurants",
        image: flippy,
        stack: flippyStack
    },
    lexi: {
        name: "Lexi",
        description: "A human resources web application that can be used to file leaves and overtime, monitor employees filed leaves and overtime as well, process a check voucher, add employee’s information.",
        image: lexi,
        stack: lexiStack
    },
    pokedex: {
        name: "Pokedex",
        description: "An electronic device created and designed to catalog and provide information regarding the various species of Pokémon featured in the Pokémon video game, anime and manga series.",
        image: pokedex,
        stack: pokedexStack
    },
    po_tracker: {
        name: "PO Tracker",
        description: "An web application used mainly for processing HR and Finance backoffice activities.",
        image: po_tracker,
        stack: poTrackerStack,
    },
    python_automation : {
        name: "SMD DAS",
        description: "Executing a written program that manipulates, transform and clean the csv's, databases, spreadsheets' data",
        image: python_automation,
        stack: pythonAutomateStack
    }
}

const myUrls = {
    github: "https://github.com/Cerich15",
    facebook: "https://www.facebook.com/spencer.castro15",
    linkedIn: "https://www.linkedin.com/in/spencer-castro-65288715b"
  }

const techStack = ['ReactJs','NextJs','Angular', 'Python', 'MySQL', 'HTML','Javascript','Typescript', 'CSS', 'Material UI', 'Tailwind']
const devTools = ['Bitbucket', 'Github', 'Gitlab']

export {
        projects, 
        myUrls, 
        techStack,
        devTools, 
        flippyStack, 
        lexiStack, 
        pokedexStack, 
        poTrackerStack, 
        pythonAutomateStack,
        projectsName
       }