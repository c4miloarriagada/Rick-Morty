import { createContext, useContext } from 'solid-js'
import { createStore } from 'solid-js/store'
import type { ParentProps } from 'solid-js'

interface Common {
  open: boolean
}

interface Actions {
  open?(): void
}

const initialState: Common = {
  open: false
}

const Common = createContext<[Common, Actions]>([initialState, {}])

export const CommonProvider = (
  props: ParentProps<{ sidebarToggle?: boolean }>
) => {
  const [state, setState] = createStore<{ open: boolean }>({
    open: props.sidebarToggle || false
  })
  const common: [Common, Actions] = [
    state,
    {
      open() {
        setState('open', (open) => !open)
      }
    }
  ]

  return <Common.Provider value={common}>{props.children}</Common.Provider>
}

export function useCommon() {
  const context = useContext(Common)
  if (!context) {
    throw new Error('Context not provider')
  }
  return context
}
