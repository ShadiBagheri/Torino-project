import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
    width: 45,
    height: 45,
};
export const contentType = "image/png";

console.log(runtime)

export default function Icon() {
    return new ImageResponse(
      (
          <div className="flex w-[45px] h-[45px]">
              <link
                  rel="icon"
                  href="/icon?<generated>"
                  type="image/<generated>"
                  sizes="<generated>"
              />
          </div>
      ),
    {...size}
    )
}