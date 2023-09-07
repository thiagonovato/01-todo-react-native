import { create } from 'zustand'
import * as Crypto from 'expo-crypto';
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ItemProps } from '../components/Card';

interface TodoState {
  list: ItemProps[];
  screen: string
  addTodo: (description: string) => void;
  removeTodo: (id: string) => void;
  // updateItem: (id: string, done: boolean) => void;
  checkTodo: (id: string) => void
  setScreen: (name: string) => void
  // clearList: () => void;
}

export const useListStore = create<TodoState>()(
  persist(
    (set) => ({
      list: [],
      screen: "created",
      addTodo: async (description: string) => {
        const digest = await Crypto.randomUUID()
        set((state) => ({
          list: [
            ...state.list,
            {
              id: digest,
              description,
              done: false,
            } as ItemProps,
          ],
        }));
      },
      removeTodo: (id) => {
        set((state) => ({
          list: state.list.filter((item) => item.id !== id),
        }));
      },
      checkTodo: (id: string) => {
        set((state) => ({
          list: state.list.map((item) =>
            item.id === id ? { ...item, done: !item.done } : item
          ),
        }));
      },
      setScreen: (name: string) => {
        set(() => ({
          screen: name
        }))
      },
    }),
    {
      name: 'list-storage',
      storage: createJSONStorage(() => AsyncStorage)
    }
  )
)

export default useListStore