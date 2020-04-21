import { of, from } from 'rxjs';
import { distinct, distinctUntilChanged } from 'rxjs/operators';

const numeros$ = of(1,1,1,3,3,2,2,4,4,5,3,1);

numeros$.pipe(
    distinctUntilChanged()
)
.subscribe(console.log);

interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    {
        nombre: 'superman'
    },
    {
        nombre: 'megamente'
    },
    {
        nombre: 'batman'
    },
    {
        nombre: 'batman'
    },
    {
        nombre: 'robin'
    },
    {
        nombre: 'megamente'
    },
    {
        nombre: 'megamente'
    },
    {
        nombre: 'superman'
    },
    {
        nombre: 'batman'
    },
    {
        nombre: 'batman'
    },
]

from(personajes).pipe(
    distinctUntilChanged( (ant, act) => ant.nombre === act.nombre)
).subscribe(console.log);

