


var SoundFX = function(){

    try {
        SoundFX.isAvailable = true;
        this.context = new webkitAudioContext();

    } catch( error ) {
        SoundFX.isAvailable = false;
        console.warn( "THREE.AudioObject: webkitAudioContext not found" );
        return this;

    }


    this.source = this.context.createBufferSource();
    this.gainNode = this.context.createGainNode();
    this.panner = this.context.createPanner();

    this.source.connect(this.panner);
    this.panner.connect(this.gainNode);
    this.gainNode.connect(this.context.destination);

    this.gainNode.gain.value = 0.0;
    this.source.looping = true;
}

SoundFX.prototype.load = function(url){
    // Load asynchronously
    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.responseType = "arraybuffer";

    var scope = this

    request.onload = function() {
        scope.source.buffer = scope.context.createBuffer(request.response, true);
        scope.source.noteOn(0);
    }

    request.send();
}

var SoundLibrary = {}

