import HerosOfWarcraft from "../../audio/HeroesOfWarcraft.mp3"
import DeUmTrocado from "../../audio/DeUmTrocado.mp3"
import FullDeck from "../../audio/FullDeck.mp3"
import PullUpAChair from "../../audio/PullUpAChair.mp3"

export default function Audios({position}) {
    const sings = [HerosOfWarcraft, DeUmTrocado, FullDeck, PullUpAChair]
    return (<audio src={sings[position]} autoplay="autoplay" type="audio/mp3"/>)
}