export type LoggerFunction = (...data: unknown[]) => void

export interface Logger {
  log: LoggerFunction
  warn: LoggerFunction
  error: LoggerFunction
}

export const createLoggerWithPrefix = (prefix: string) => {
  return class Logger implements Logger {
    public log(...data: unknown[]) {
      console.log(`[${prefix}]`, ...data)
    }

    public warn(...data: unknown[]) {
      console.warn(`[${prefix}]`, ...data)
    }

    public error(...data: unknown[]) {
      console.error(`[${prefix}]`, ...data)
    }
  }
}
