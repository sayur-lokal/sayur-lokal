import { z } from "zod"

export const commaSeparatedStringArray = z.string()
                    .transform(v => v.split(","))
                    .pipe(z.string().array())