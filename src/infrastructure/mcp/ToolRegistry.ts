export interface ToolHandler {
  useCase: { execute(): Promise<any> };
  description: string;
}

export class ToolRegistry {
  private static instance: ToolRegistry;
  private tools = new Map<string, ToolHandler>();

  private constructor() {}

  static getInstance(): ToolRegistry {
    if (!ToolRegistry.instance) {
      ToolRegistry.instance = new ToolRegistry();
    }
    return ToolRegistry.instance;
  }

  register(name: string, handler: ToolHandler): void {
    this.tools.set(name, handler);
  }

  get(name: string): ToolHandler | undefined {
    return this.tools.get(name);
  }

  list(): { name: string; description: string; inputSchema: any }[] {
    return Array.from(this.tools.entries()).map(([name, handler]) => ({
      name,
      description: handler.description,
      inputSchema: { type: "object", properties: {} }, // Expandible si añadimos argumentos
    }));
  }
}
