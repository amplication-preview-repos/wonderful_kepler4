import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HfhfhgghServiceBase } from "./base/hfhfhggh.service.base";

@Injectable()
export class HfhfhgghService extends HfhfhgghServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
