type BentoSlideProps = {
    images: string[] | string[][];
};

export default function Bento({ images }: BentoSlideProps) {
    return (
        <div className="grid grid-cols-2 h-full  text-background gap-2">
            <div className="col-span-1 grid grid-rows-10 gap-2">
                <div className="row-span-4 bg-center bg-cover  rounded-2xl"
                    style={{ backgroundImage: `url(${images[0]})` }}

                >
                </div>

                <div className="row-span-6 rounded-2xl border border-background bg-center bg-cover"
                    style={{ backgroundImage: `url(${images[1]})` }}
                >
                </div>
            </div>



            <div className="col-span-1 grid grid-rows-10 gap-2">
                <div className="row-span-6 rounded-2xl bg-center bg-cover"
                    style={{ backgroundImage: `url(${images[2]})` }}
                >
                </div>

                <div className="row-span-4  rounded-2xl bg-center bg-cover"
                    style={{ backgroundImage: `url(${images[3]})` }}
                >
                </div>


            </div>
        </div >
    );
}
