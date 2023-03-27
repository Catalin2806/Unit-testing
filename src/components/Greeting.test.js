import Greeting from "./Greeting"
import { render,screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

describe("Greeting component",()=>{
    test('renders Hello World as a text', ()=>{
        //arange
    render(<Greeting />);
    
    //act
    //nothing
    
    //assert
    const helloWorldElement=screen.getByText('Hello word');
    expect(helloWorldElement).toBeInTheDocument();
    })

    test('renders Its good to see you',()=>{
        render(<Greeting/>);

        const outputElement=screen.getByText('good to see you',{exact:false});
    expect(outputElement).toBeInTheDocument();

    })

    test('renders changed',()=>{
        render(<Greeting/>);

        //act
        const buttonElement=screen.getByRole('button');
        userEvent.click(buttonElement)

        const outputElement=screen.getByText('Changed');
    expect(outputElement).toBeInTheDocument();

    })

    test('does not render good to see you',()=>{
        render(<Greeting/>);

        //act
        const buttonElement=screen.getByRole('button');
        userEvent.click(buttonElement)

        const outputElement=screen.queryByText('good to see you',{exact:false});
    expect(outputElement).toBeNull();

    })


})

