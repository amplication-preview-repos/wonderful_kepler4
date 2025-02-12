import { Module } from "@nestjs/common";
import { HfhfhgghModuleBase } from "./base/hfhfhggh.module.base";
import { HfhfhgghService } from "./hfhfhggh.service";
import { HfhfhgghController } from "./hfhfhggh.controller";
import { HfhfhgghResolver } from "./hfhfhggh.resolver";

@Module({
  imports: [HfhfhgghModuleBase],
  controllers: [HfhfhgghController],
  providers: [HfhfhgghService, HfhfhgghResolver],
  exports: [HfhfhgghService],
})
export class HfhfhgghModule {}
