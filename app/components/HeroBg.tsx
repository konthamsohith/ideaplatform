import Image from "next/image";

export default function HeroBg() {
    return (
        <div className="hero-bg-image" aria-hidden="true">
            <div className="hero-bg-ken">
                <Image
                    src="/assests/bg1.png"
                    alt=""
                    fill
                    priority
                    style={{ objectFit: "cover", objectPosition: "center" }}
                />
            </div>
            <div className="hero-bg-overlay" />
        </div>
    );
}
