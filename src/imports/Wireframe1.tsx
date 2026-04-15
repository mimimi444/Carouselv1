import imgRectangle1 from "figma:asset/ece298d0ec2c16f10310d45724b276a6035cb503.png";
import imgRectangle2 from "figma:asset/dc74b94f54e405be185afe3930fd6fd64e2805c1.png";
import imgRectangle3 from "figma:asset/81d74dbd707174a937ad2be49e8f09e5582c7c58.png";
import imgRectangle4 from "figma:asset/6de6f5573adee951cc4ec1849065f27c4936bdb7.png";

export default function Wireframe() {
  return (
    <div className="bg-white relative size-full" data-name="Wireframe - 1">
      <div className="absolute left-[385.1px] pointer-events-none rounded-[56px] size-[669.798px] top-[177.1px]">
        <div aria-hidden="true" className="absolute inset-0 rounded-[56px]">
          <img alt="" className="absolute max-w-none object-cover rounded-[56px] size-full" src={imgRectangle1} />
          <img alt="" className="absolute max-w-none object-cover rounded-[56px] size-full" src={imgRectangle2} />
        </div>
        <div aria-hidden="true" className="absolute border-8 border-black border-solid inset-0 rounded-[56px] shadow-[0px_24px_0px_0px_black]" />
      </div>
      <div className="absolute flex items-center justify-center left-[-368.47px] size-[653.837px] top-[257.61px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-5.85deg]">
          <div className="pointer-events-none relative rounded-[56px] size-[596.149px]">
            <div aria-hidden="true" className="absolute inset-0 rounded-[56px]">
              <img alt="" className="absolute max-w-none object-cover rounded-[56px] size-full" src={imgRectangle1} />
              <img alt="" className="absolute max-w-none object-cover rounded-[56px] size-full" src={imgRectangle3} />
            </div>
            <div aria-hidden="true" className="absolute border-8 border-black border-solid inset-0 rounded-[56px] shadow-[0px_24px_0px_0px_black]" />
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[1154.65px] size-[653.807px] top-[257.63px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[5.85deg]">
          <div className="pointer-events-none relative rounded-[56px] size-[596.149px]">
            <div aria-hidden="true" className="absolute inset-0 rounded-[56px]">
              <img alt="" className="absolute max-w-none object-cover rounded-[56px] size-full" src={imgRectangle1} />
              <img alt="" className="absolute max-w-none object-cover rounded-[56px] size-full" src={imgRectangle4} />
            </div>
            <div aria-hidden="true" className="absolute border-8 border-black border-solid inset-0 rounded-[56px] shadow-[0px_24px_0px_0px_black]" />
          </div>
        </div>
      </div>
    </div>
  );
}