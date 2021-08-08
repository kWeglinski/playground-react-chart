import { useEffect } from 'react'
import { UseClickOutside } from './types'

const useOnClickOutside: UseClickOutside = (ref, handler) => {
    useEffect(() => {
        const listener = (event: MouseEvent | UIEvent) => {
            const { target } = event
            // Do nothing if clicking ref's element or descendent elements
            if (
                !ref?.current ||
                !(target instanceof Node) ||
                ref.current.contains(target)
            ) {
                return
            }

            handler(event)
        }

        document.addEventListener('mousedown', listener)
        document.addEventListener('touchstart', listener)

        return () => {
            document.removeEventListener('mousedown', listener)
            document.removeEventListener('touchstart', listener)
        }
    }, [ref, handler])
}

export default useOnClickOutside
