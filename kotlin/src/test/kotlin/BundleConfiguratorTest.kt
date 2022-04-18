import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.Test

internal class BundleConfiguratorTest {

    @Test
    fun change_me_first() {
        val sut = BundleConfigurator()

        Assertions.assertEquals("P1", sut.select("P1"))
    }
}