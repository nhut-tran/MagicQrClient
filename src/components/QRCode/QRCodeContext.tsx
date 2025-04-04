import {createContext, ReactNode, useContext, useReducer} from 'react';

interface QRCodeEditorState {
    size: number,
    bgColor: string,
    fgColor: string,
    quiteZone: number,
    qrStyle: qrStyle,
    logo: string,
    frameStyle: FrameStyle,
    frameColor: string
}
export type FrameStyle = "circle" | "rounded" | "square";
type qrStyle = "squares" | "dots" | "fluid";
interface QRCodeContext extends QRCodeEditorState {
    handleBgColor: (color: string) => void,
    handleFgColor: (color: string) => void,
    handleSize: (size: number) => void,
    handleQuiteZone: (zone: number) => void,
    handleQRStyle: (style: string) => void,
    handleLogo: (logo: string) => void,
    handleFrameStyle: (style: FrameStyle ) => void,
    handleFrameColor: (color: string) => void
}
type ActionName = "SET_SIZE" | "SET_BGCOLOR" | "SET_FGCOLOR" 
| "SET_QUITEZONE" | "SET_QRSTYLE" | "SET_LOGO" | "SET_FRAMESTYLE"
| "SET_FRAMECOLOR";
type Action = {
    action: ActionName,
    payload: string | number | qrStyle | FrameStyle;
}
function reducer(state: QRCodeEditorState, action: Action): QRCodeEditorState {
    switch (action.action) {
        case "SET_SIZE":
            return {...state, size: +action.payload}
        case "SET_BGCOLOR":
            return {...state, bgColor: action.payload.toString()}            
        case "SET_FGCOLOR":
            return {...state, fgColor: action.payload.toString()}   
        case "SET_QUITEZONE":
            return {...state, quiteZone: +action.payload}  
        case "SET_QRSTYLE":
            return {...state, qrStyle: action.payload as qrStyle}             
        case "SET_LOGO":
            return {...state, logo: action.payload.toString()} 
        case "SET_FRAMESTYLE":
            return {...state, frameStyle: action.payload as FrameStyle }
        case "SET_FRAMECOLOR":
            return {...state,  frameColor: action.payload as FrameStyle } 
        default:
        return state;
    }
}

const QRCodeContext = createContext<QRCodeContext>({} as QRCodeContext);

export default function QRCodeContextProvider (Props: {children: ReactNode}): ReactNode {
    const [state, dispatch] = useReducer(reducer, {
            size: 200,
            bgColor: '#000',
            fgColor: '#ffff',
            quiteZone: 10,
            qrStyle: "dots",
            logo: "",
            frameStyle: "square",
            frameColor: "#8B5CF6"
        });
        const handleBgColor = (color: string) => {
            dispatch({action: "SET_BGCOLOR", payload: color})
        }
        const handleFgColor = (color: string) => {
            dispatch({action: "SET_FGCOLOR", payload: color})
        }
        const handleSize = (size: number) => {
            dispatch({action: "SET_SIZE", payload: size})
        }
        const handleQuiteZone = (size: number) => {
            dispatch({action: "SET_QUITEZONE", payload: size})
        }
        const handleQRStyle = (style: string) => {
            dispatch({action: "SET_QRSTYLE", payload: style})
        }
        const handleLogo = (logo: string) => {
            dispatch({action: "SET_LOGO", payload: logo})
        }
        const handleFrameStyle = (style: FrameStyle) => {
            dispatch({action: "SET_FRAMESTYLE", payload: style})
        }
        const handleFrameColor = (style: string) => {
            dispatch({action: "SET_FRAMECOLOR", payload: style})
        }
        const value : QRCodeContext = {
            ...state,
            handleBgColor,
            handleQuiteZone,
            handleSize,
            handleFgColor,
            handleQRStyle,
            handleLogo,
            handleFrameStyle,
            handleFrameColor
        }
    return (
        <QRCodeContext.Provider value={value}>
            {Props.children}
        </QRCodeContext.Provider>
    )
}

export const useQRCodeContext  = () => {
    return useContext(QRCodeContext);
}