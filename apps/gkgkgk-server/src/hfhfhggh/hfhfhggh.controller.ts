import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { HfhfhgghService } from "./hfhfhggh.service";
import { HfhfhgghControllerBase } from "./base/hfhfhggh.controller.base";

@swagger.ApiTags("hfhfhgghs")
@common.Controller("hfhfhgghs")
export class HfhfhgghController extends HfhfhgghControllerBase {
  constructor(protected readonly service: HfhfhgghService) {
    super(service);
  }
}
