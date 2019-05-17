function Hero(image, top, left, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = 20;
    this.speed2 = 20;
    this.bien = 1;
    this.start = start;
    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    };
    this.moveRight = function () {
        this.left += this.speed;
    };
    this.giamRight = function () {
        this.left -= this.speed;
    };
    this.moveDow = function () {
        this.top += this.speed;
    };
    this.giamDow = function () {
        this.top -= this.speed;
    };

    function start() {
        if (this.bien == 1) {
            if (this.left < window.innerWidth - this.size) {
                this.moveRight();
            } else {
                this.bien = 2;
            }

        }

        if (this.bien == 2) {
            if (this.top < window.innerHeight - this.size) {
                this.moveDow();
            } else {
                this.bien = 3;
            }
        }

        if (this.bien == 3) {
            if (this.left > 0) {
                this.giamRight();
            } else {
                this.bien = 4;
            }
        }

        if (this.bien == 4) {
            if (this.top > 0) {
                this.giamDow();
            } else {
                this.bien = 1;
            }
        }

        document.getElementById('game' + this.image).innerHTML = this.getHeroElement();
    }

    this.start2 = function () {
        if (this.bien == 2) {
            if (this.left < window.innerWidth - this.size) {
                this.moveRight();
            } else {
                this.bien =3;
            }

        }

        if (this.bien == 1) {
            if (this.top < window.innerHeight - this.size) {
                this.moveDow();
            } else {
                this.bien = 2;
            }
        }

        if (this.bien == 4) {
            if (this.left > 0) {
                this.giamRight();
            } else {
                this.bien = 1;
            }
        }

        if (this.bien == 3) {
            if (this.top > 0) {
                this.giamDow();
            } else {
                this.bien = 4;
            }
        }

        document.getElementById('game' + this.image).innerHTML = this.getHeroElement();
    }
}

let hero = new Hero('pikachu.png', 0, 0, 200);
setInterval(function () {
    hero.start();
}, 10);
let doremon = new Hero('images.png', 0, 0, 200);
setInterval(function () {
    doremon.start2();
}, 100);


