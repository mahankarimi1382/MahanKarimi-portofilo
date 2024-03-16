import Atropos from "atropos/react";
import "atropos/atropos.css";
import 'atropos/css'

const LoadingPg = () => (
    <div >
        <Atropos
            activeOffset={40}
            shadowScale={1.05}
            onEnter={() => console.log('Enter')}
            onLeave={() => console.log('Leave')}
            onRotate={(x, y) => console.log('Rotate', x, y)}
        >
            <div className="w-96 justify-center items-center flex h-96">
                <h2 className=" text-9xl">hello</h2>
            </div>
        </Atropos>
    </div>
);

export default LoadingPg;
