import Async from "./Async"
import { render,screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

describe('Async component',()=>{
    test('renders posts if request succeeds',async()=>{
        //pt a reduce traficul inutil de internet
        window.fetch=jest.fn();
        window.fetch.mockResolvedValueOnce({
            json:async()=>[{id:'p1',title:'First post'}],
        });
        render(<Async/>)

      const listItemElements=await screen.findAllByRole('listitem');
      expect(listItemElements).not.toHaveLength(0);
    })
})