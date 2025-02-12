import * as graphql from "@nestjs/graphql";
import { HfhfhgghResolverBase } from "./base/hfhfhggh.resolver.base";
import { Hfhfhggh } from "./base/Hfhfhggh";
import { HfhfhgghService } from "./hfhfhggh.service";

@graphql.Resolver(() => Hfhfhggh)
export class HfhfhgghResolver extends HfhfhgghResolverBase {
  constructor(protected readonly service: HfhfhgghService) {
    super(service);
  }
}
