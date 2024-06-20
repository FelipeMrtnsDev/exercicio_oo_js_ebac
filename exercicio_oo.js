function PedirCarro(modelo, ano, marca, maxVelocidade=0) {
    this.modelo = modelo;
    this.ano = ano;
    this.marca = marca;
    this.maxVelocidade = maxVelocidade;
}

function CarroCaro(modelo, ano, marca, maxVelocidade=0) {
    PedirCarro.call(this, modelo, ano, marca, maxVelocidade);
    this.acelerar = function(velocidade) {
        if (velocidade > this.maxVelocidade) {
            velocidade = this.maxVelocidade;
        }
        console.log(`O carro de modelo: ${this.modelo} está acelerando a ${velocidade} km/h`);
        this.frear = function(tipo) {
            if (velocidade > 0) {
                if (tipo === 'leve') {
                    let frenagem = velocidade * 0.5;
                    console.log(`O carro de modelo: ${this.modelo} diminuiu a velocidade para ${frenagem} km/h`);
                    velocidade = frenagem;
                    console.log(`O carro de modelo: ${this.modelo} freou`);
                } else if (tipo === 'pesado') {
                    console.log(`O carro de modelo: ${this.modelo} freou e derrapou`);
                    velocidade = 0;
                } else {
                    console.log(`Tipo de frenagem não reconhecido`);
                }
            } else {
                console.log(`O carro de modelo: ${this.modelo} já está parado`);
            }
        };
    };
}

function CarroPopular(modelo, ano, marca, maxVelocidade=0) {
    PedirCarro.call(this, modelo, ano, marca, maxVelocidade);
    this.acelerar = function(velocidade) {
        if (velocidade > this.maxVelocidade) {
            velocidade = this.maxVelocidade;
        }
        console.log(`O carro de modelo: ${this.modelo} está acelerando a ${velocidade} km/h`);
        this.frear = function(tipo) {
            if (velocidade > 0) {
                if (tipo === 'leve') {
                    let frenagem = velocidade * 0.5;
                    console.log(`O carro de modelo: ${this.modelo} diminuiu a velocidade para ${frenagem} km/h`);
                    velocidade = frenagem;
                    console.log(`O carro de modelo: ${this.modelo} freou`);
                } else if (tipo === 'pesado') {
                    console.log(`O carro de modelo: ${this.modelo} freou e derrapou`);
                    velocidade = 0;
                } else {
                    console.log(`Tipo de frenagem não reconhecido`);
                }
            } else {
                console.log(`O carro de modelo: ${this.modelo} já está parado`);
            }
        };
    };
}

const carro1 = new CarroCaro('320i', 2020, 'bmw', 280);
const carro2 = new CarroPopular('Kwid', 2015, 'Renault', 220);
const carro3 = new CarroCaro('Corvette Stingray', 2023, 'Chevrolet', '312');

carro1.acelerar(220);
carro1.frear('leve');

carro2.acelerar(250);
carro2.frear('pesado')