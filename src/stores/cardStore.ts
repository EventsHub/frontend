import create from 'zustand'
import { ICard } from '../shared/types';
import { getPage, createCard } from "../shared/api"

interface CardState extends ICard {
    urlImage: string;
}

interface IEvent extends ICard {
    file: File;
}

interface State {
    cards: Array<CardState>,
    getCards(): void;
    createEvent: (event: IEvent) => void;
}

const useCardStore = create<State>()(
    (set, get) => ({
        cards: [],
        getCards: async () => {
            const res = await getPage()
            console.log(res);
            set({ cards: res.data.items })
        },
        createEvent: async (event) => {
            await createCard(event);
            get().getCards();
        },
    }),
)

export default useCardStore;