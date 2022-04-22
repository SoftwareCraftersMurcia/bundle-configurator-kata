package bundle

import munit.FunSuite

class BundleConfiguratorSpec extends FunSuite {

  test("Bundle configurator should") {

    assertEquals("P1", BundleConfigurator.select("P1"))
  }

}
