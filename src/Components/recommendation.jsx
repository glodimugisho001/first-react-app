const currentMonth = new Date().getMonth()
const isSpring = currentMonth >= 2 && currentMonth <= 5

export default function Recommendation() {
    if (!isSpring) {
        return <div>Ce n&apos;est pas le printemps, remportez 10% de réduction sur tout les plantes en stock</div>
    }
    return (
        <div>C&apos;est le printemps, remportez 10% de réduction sur tout les plantes en stock</div>
    )
}
