setTimeout(function(){
    const collBox = document.querySelectorAll("#collection li");
    const observer = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
            if(entry.isIntersecting){
                entry.target.classList.add("show");
            }
        });
    },{
        threshold: 0.3
    });
    collBox.forEach((box,index)=>{
        box.style.transitionDelay = `${index * 0.2}s`;
        observer.observe(box);
    });
},500);