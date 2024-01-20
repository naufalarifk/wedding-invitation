import { Deco } from '../../assets/deco'

export const SlideOne = () => {
  return (
    <div className='space-y-4'>
    <h1 className='text-2xl font-bold text-center'>THE WEDDING OF</h1>
    <Deco height={200} width={170} className='mx-auto' />
    <div className='text-center'>
      <div>
    <h1 className='text-xl font-semibold'>Heri Mashudi (anak ke 2)</h1>
    <p>(Alm) Ibu supiyah dan (Alm) Bapak djakiman</p>
      </div>
    <span className='text-3xl'>&</span>
    <div>
    <h1 className='text-xl font-semibold'>Fitri hariyanti (anak ke 8)</h1>
    (Alm) Ibu Suwati dan (Alm) Bapak karjono
    </div>
    </div>
    </div>
  )
}
