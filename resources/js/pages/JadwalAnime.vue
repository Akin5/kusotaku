<template>
	<vs-row class="mt-4">
		<vs-col w="12">
			<vs-table>
				<template #thead>
					<vs-tr>
						<vs-th>Senin</vs-th>
						<vs-th>Selasa</vs-th>
						<vs-th>Rabu</vs-th>
						<vs-th>Kamis</vs-th>
						<vs-th>Jum'at</vs-th>
						<vs-th>Sabtu</vs-th>
						<vs-th>Minggu</vs-th>
					</vs-tr>
				</template>
				<template #tbody>
					<vs-tr v-for="(tr, tr_id) in jadwal" :key="tr_id">
						<vs-td>
							{{ tr.senin }}
						</vs-td>
						<vs-td>
							{{ tr.selasa }}
						</vs-td>
						<vs-td>
							{{ tr.rabu }}
						</vs-td>
						<vs-td>
							{{ tr.kamis }}
						</vs-td>
						<vs-td>
							{{ tr.jumat }}
						</vs-td>
						<vs-td>
							{{ tr.sabtu }}
						</vs-td>
						<vs-td>
							{{ tr.minggu }}
						</vs-td>
					</vs-tr>
				</template>
			</vs-table>
		</vs-col>
	</vs-row>
</template>
<script>
import { jadwalAnime } from "~/util";
export default {
	data: () => ({
		jadwal: jadwalAnime
	}),
	metaInfo: {
		titleTemplate: "Jadwal Anime | %s"
	}
};
</script>
