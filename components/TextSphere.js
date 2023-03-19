import React,{useEffect} from 'react'
import TagCloud from 'TagCloud'

function TextSphere() {


    useEffect(()=>{
        return () => {
            const container = ".tagcloud";

            const texts = [
                "HTML",
                "CSS",
                "TAILWINDCSS",
                'SQL',
                'PYTHON',
                'PHP',
                "REACT",
                'NEXT',
                'FLUTTER',,
                'DART',
                "C++",
                "BOOTSTRAP",
                "JSON",
                'JAVASCRIPT',
                'TYPESCRIPT',
                'SASS',
                'ANGULAR',
                'GIT',
                'NODEJS',
                'MONGODB',
                'FIREBASE',
                'THREEJS',

            ];

            const options = {
                radius:300,
                maxspeed :"fast",
                initspeed: "fast",
                keep: true,
            };

            TagCloud(container,texts,options);

        }
},[]);

return (
    <>
    <div className='text-sphere'>
        <span className='tagcloud'></span>
    </div>
    </>
)
}

export default TextSphere